import random

def generate_timetable(num_students, num_classrooms, subjects, faculties, num_divisions):
    timetable = {}
    
    # Seed the random number generator with current system time
    random.seed()

    # Generate timetable for each division
    for division in range(1, num_divisions + 1):
        timetable[f"Division {division}"] = {}
        print("divisions: ",division)
        for classroom in range(1, num_classrooms + 1):
            print("Classrooms: ", classroom)
            timetable[f"Division {division}"][classroom] = {}
            for day in ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]:
                timetable[f"Division {division}"][classroom][day] = {}
                print(timetable)
        
        print("subjects: ",subjects)
        # Distribute classes evenly across the days of the week for each subject
        for subject, credit in subjects.items():

            print("Subject & credits: ", subject,credit)
            print("Subject Items: ", subjects.items()) 
            classes_per_day = credit // 5 
            print("classes per day",classes_per_day) # Distribute equally over 5 days
            remainder = credit % 5  # Remaining classes to distribute
            print("remainder",remainder)

            # Shuffle the days to distribute the remaining classes randomly
            days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
            random.shuffle(days)
            
            # Distribute classes for the subject to each day
            for day in days:
                for _ in range(classes_per_day):
                    classroom = random.randint(1, num_classrooms)
                    random_faculty = random.choice(faculties)
                    timetable[f"Division {division}"][classroom][day].setdefault(subject, []).append(random_faculty)
                    
            # Distribute the remaining classes randomly
            for _ in range(remainder):
                day = random.choice(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"])
                classroom = random.randint(1, num_classrooms)
                random_faculty = random.choice(faculties)
                timetable[f"Division {division}"][classroom][day].setdefault(subject, []).append(random_faculty)

    return timetable
