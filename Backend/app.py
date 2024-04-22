import requests
from flask import Flask, jsonify, request
import random
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def generate_timetable(classrooms, total_subjects, faculties, time_slots, days):

    timetable = {"Monday": {"0": {"subject": "Math", "faculty": "Rajeev sir", "classroom": "101"}}, "Tuesday": {"0": {"subject": "Science", "faculty": "Sameer sir", "classroom": "102"}}}
    return timetable


@app.route('/timetable', methods=['POST'])
def get_timetable():
    # timetable = generate_timetable(num_classrooms, total_subjects, faculties, time_slots, days)
    
    data = request.get_json()

    print(data)

    timetable = {"Monday": {"0": {"subject": "Math", "faculty": "Rajeev sir", "classroom": "101"}}, "Tuesday": {"0": {"subject": "Science", "faculty": "Sameer sir", "classroom": "102"}}}
    return timetable

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)