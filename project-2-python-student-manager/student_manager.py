import json
import os

# Buggy Student Grade Manager

def load_data():
    if not os.path.exists("students.json"):
        return []
    with open("students.json", "r") as file:
        try:
            data = json.load(file)
            return data if data else []
        except (json.JSONDecodeError, ValueError):
            return []

def save_data(students):
    with open("students.json", "w") as file:
        json.dump(students, file, indent=4)

def add_student():
    name = input("Enter student name: ")
    grades_input = input("Enter grades separated by commas (e.g. 80,90,85): ")
    grades = [float(g.strip()) for g in grades_input.split(",")]
    
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
        total_score = sum(student["grades"]) 
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
        else:
            print("Invalid choice!")

if __name__ == "__main__":
    main()