export class Employee {
  id: number;
  name: string;
  gender: string;
  contactPreference: string;
  email?: string;
  phoneNumber?: string;
  dateOfBirth: Date;
  department: string;
  isActive: boolean;
  photoPath?: string;
  password: string;
  confirmPassword: string;

  constructor(id, name, gender, contactPreference, email, phoneNumber, dateofBirth, department, isActive, photoPath, password
    , confirmPassword) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.contactPreference = contactPreference;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.dateOfBirth = dateofBirth;
    this.department = department;
    this.isActive = isActive;
    this.photoPath = photoPath;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}
