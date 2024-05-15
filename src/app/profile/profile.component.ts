import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
window:any;
 constructor(){ }

 ngOnInit(): void {
  window.onscroll = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");
    const top = window.scrollY;

    sections.forEach((sec: Element) => {
      const offset = (sec as HTMLElement).offsetTop - 150;
      const height = (sec as HTMLElement).offsetHeight;
      const id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links: Element) => {
          links.classList.remove("active");
          document
            .querySelector(`header nav a[href*="${id}"]`)
            ?.classList.add("active");
        });
      }
    });
  };
}

}
