import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ClassThreeComponent } from "./components/class-three/class-three.component";
import { ClassTwoComponent } from "./components/class-two/class-two.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { DownloadsComponent } from "./components/downloads/downloads.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "class2", component: ClassTwoComponent },
  { path: "class3", component: ClassThreeComponent },
  { path: "downloads", component: DownloadsComponent },
  { path: "contact-us", component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
