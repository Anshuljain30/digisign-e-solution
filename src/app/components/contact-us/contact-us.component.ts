import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  name = "";
  mobile = "";
  message = "";
  enCodeMessage = "";
  onSubmit(receivedForm: NgForm) {}

  constructor() {}

  ngOnInit(): void {}
  ngDoCheck() {
    this.enCodeMessage = encodeURIComponent(
      "Name: " +
        this.name +
        "\n" +
        "Mobile: " +
        this.mobile +
        "\n" +
        "Message: " +
        this.message
    );
  }
}
