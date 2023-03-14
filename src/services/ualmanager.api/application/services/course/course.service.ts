import { prisma } from "../../../lib/prisma";
import { CreateCourseDto } from "../../dtos/course";


export const courseService ={
    addCourse,
    getAllCourses
}


async function addCourse(course:CreateCourseDto){

    const currentCourse= await prisma.course.create({
        data:{
            name:course.name
        }
    })

    return currentCourse;
}

async function getAllCourses(){
   const currentCourses= await prisma.course.findMany();
   return currentCourses;

}