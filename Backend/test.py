import json
import requests
from flask import Flask, jsonify, request
import random
from flask_cors import CORS
import pprint
from flask_pymongo import PyMongo
# from flask_mongoengine import MongoEngine
# from models import Timetable

app = Flask(__name__)
CORS(app)
# Use your MongoDB Atlas connection string
app.config['MONGO_URI'] = 'mongodb+srv://aniket:aniket@aniket.3xurbx3.mongodb.net/aniket?retryWrites=true&w=majority'

mongo = PyMongo(app)


def generate_timetable(classrooms, total_subjects, faculties, time_slots, days):

    # time_table = {day: {slot: {"subject": None, "faculty": None, "classroom": None} for slot in time_slots} for day in days}
    
    # random.seed()

    # classroom_availability = {day: {slot: set() for slot in time_slots} for day in days}
    # faculty_schedule = {faculty: {day: {slot: set() for slot in time_slots} for day in days} for faculty in faculties}

    # subject = 0
    # for day in days:
    #     for slot in time_slots:
    #         if subject >= len(total_subjects):
    #             break
    #         available_classrooms = set(range(classrooms)) - classroom_availability[day][slot]
    #         if available_classrooms:
    #             classroom = random.choice(list(available_classrooms))
    #             faculty = random.choice(faculties)
    #             if not faculty_schedule[faculty][day][slot]:
    #                 time_table[day][slot]["subject"] = subject
    #                 time_table[day][slot]["faculty"] = faculty
    #                 time_table[day][slot]["classroom"] = classroom

    #                 classroom_availability[day][slot].add(classroom)
    #                 faculty_schedule[faculty][day][slot] = True
    #                 subject += 1

    # return time_table

    time_table = {}
    # Initialize the timetable with empty slots for each day and time slot
    for day in days:
        time_table[day] = {}
        for slot in time_slots:
            time_table[day][slot] = {"subject": None, "faculty": None, "classroom": None}
    random.seed()

    classroom_availability = [[0] * classrooms for _ in range(len(time_slots))]
    faculty_schedule = {faculty: {day: [0] * len(time_slots) for day in days} for faculty in faculties}
    
    final_tt = [time_table,classroom_availability,faculty_schedule]

    subject = 0
    for slot in range(len(time_slots)):
        if(subject>len(total_subjects)):
            break
        for day in days:
                    classroom = random.randint(0, classrooms - 1)
                    classroom = int(classroom)
                    # slot = int(slot)
                    print("slot: ", slot, "classroom: ", classroom)
                    if classroom_availability[slot][classroom] == 0:
                        faculty = random.choice(faculties)
                        if faculty_schedule[faculty][day][slot] == 0:

                             # Update classroom availability
                                classroom_availability[slot][classroom] = 1
                                # Update faculty schedule
                                faculty_schedule[faculty][day][slot] = 1
                                
                                time_table[day][slot]["subject"] = subject
                                time_table[day][slot]["faculty"] = faculty
                                time_table[day][slot]["classroom"] = classroom
                                subject=subject+1

                                if(subject>len(total_subjects)):
                                    break

    # timetable = {"Monday": {"0": {"subject": "Math", "faculty": "Rajeev sir", "classroom": "101"}}, "Tuesday": {"0": {"subject": "Science", "faculty": "Sameer sir", "classroom": "102"}}}
    return final_tt

@app.route('/timetable', methods=['POST'])
def get_timetable():
    
    data = request.get_json()

    # print(data)
    division = data.get('division')
    subjects = data.get('subjects')
    num_classrooms = data.get('numberOfClassrooms')

    total_subjects = []
    for subject in subjects:
        name = subject['name']
        credits = int(subject['credits'])
        total_subjects.extend([name] * credits)

    # print(total_subjects)
    
    faculty = data.get('faculties')

    faculties = [entry['name'] for entry in faculty]
    # print(faculties)

    time_slots = [0,1,2,3,4,5,6,7]
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

    timetable_generated = generate_timetable(num_classrooms, total_subjects, faculties, time_slots, days)
    # timetable = Timetable(division=division, timetable_data=timetable_generated)
    # timetable.save()
    # timetable = {"Monday": {"0": {"subject": "Math", "faculty": "Rajeev sir", "classroom": "101"}}, "Tuesday": {"0": {"subject": "Science", "faculty": "Sameer sir", "classroom": "102"}}}
    timetable_collection = mongo.db.timetable
    timetable_collection.insert_one({"division": division, "timetable_data": timetable_generated})
    return timetable_generated

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)