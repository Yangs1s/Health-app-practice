export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs="contactus"
} // 열거형으로 쓴다.


export interface BenefitType{
  icon:JSX.Element;
  title:string;
  description:string
}

export interface ClassType{
  name:string;
  description?:string;
  image:string
}