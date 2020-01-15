import { Employee } from "../Model/employee.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-employees",
  templateUrl: "./list-employees.component.html",
  styleUrls: ["./list-employees.component.css"]
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      fullName: "Mark",
      address: "28 Nguyễn Tri Phương",
      phone: "01234221239",
      photoPath: "assets/images/employee-1.png"
    },
    {
      id: 2,
      fullName: "Lion",
      address: "28 Nguyễn Huệ",
      phone: "01221251588",
      photoPath: "assets/images/employee-2.png"
    },
    {
      id: 3,
      fullName: "john",
      address: "255 Nguyễn Tất Thành",
      phone: "0123456789",
      photoPath: "assets/images/employee-3.png"
    }
  ];

  avatar : string | ArrayBuffer = null;

  constructor() {}

  ngOnInit() {}

  handleUpload(event) {
    // const _self = this;
    
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.avatar = reader.result
    };
  }
}
