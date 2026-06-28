import json
import os

# Buggy Student Grade Manager

def load_data():
    if not os.path.exists("students.json"):
        return []
    with open("students.json", "r") as file:
        # BUG 1: File might be empty, resulting in json.JSONDecodeError if we don't catch it
        return json.load(file)

def save_data(students):
    with open("students.json", "w") as file:
        json.dump(students, file, indent=4)

def add_student():
    name = input("Enter student name: ")
    # BUG 2: Read grades as comma-separated string, but we fail to convert elements to float/int
    grades_input = input("Enter grades separated by commas (e.g. 80,90,85): ")
    grades = grades_input.split(",") # BUG: grades are stored as strings (e.g., ["80", "90"])
    
    student = {
        "name": name,
        "grades": grades
    }
    
    students = load_data()
    students.append(student)
    save_data(students)
    print(f"Student {name} added successfully!")

def calculate_average():
    students = load_data()
    if not students:
        print("No student data found.")
        return
        
    for student in students:
        # BUG 3: TypeError - sum() cannot sum a list of strings, and grades are strings!
        # BUG 4: KeyError - accessing 'grade' instead of 'grades'
        total_score = sum(student["grade"]) 
        avg = total_score / len(student["grades"])
        print(f"Student: {student['name']} - Average Grade: {avg:.2f}")

def main():
    while True:
        print("\n--- Student Grade Manager ---")
        print("1. Add Student")
        print("2. Calculate & Show Averages")
        print("3. Exit")
        choice = input("Enter choice (1-3): ")
        
        if choice == "1":
            add_student()
        elif choice == "2":
            calculate_average()
        elif choice == "3":
            print("Goodbye!")
            break
        else
            # BUG 5: Syntax Error - missing colon ':' on the else statement
            print("Invalid choice!")

if __name__ == "__main__":
    main()
