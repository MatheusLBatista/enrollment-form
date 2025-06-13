import './style.css';
import { EnrollmentSchema } from './validators/enrollmentSchema';

const form = document.querySelector<HTMLFormElement>('#form')!;
const name = document.querySelector<HTMLInputElement>('#name')!;
const email = document.querySelector<HTMLInputElement>('#email')!;
const maleGender = document.querySelector<HTMLInputElement>('#male')!;
const femaleGender = document.querySelector<HTMLInputElement>('#female')!;
const course = document.querySelector<HTMLSelectElement>('#course')!;
const description = document.querySelector<HTMLTextAreaElement>('#description')!;
const terms = document.querySelector<HTMLInputElement>('#terms')!;

interface Enrollment {
    name: string,
    email: string,
    gender: string | undefined,
    course: string, 
    description: string,
    terms: boolean
}

function limparFormulario() {
    form.reset()
}

function getGenderSelected() {
    if(maleGender.checked) return 'male';
    if(femaleGender.checked) return 'female';
}

export let enrollments: Enrollment[] = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const e: Enrollment = {
        name: name.value,
        email: email.value,
        gender: getGenderSelected(),
        course: course.value,
        description: description.value,
        terms: terms.checked
    }

    const parsedData = EnrollmentSchema.parse(e);

    enrollments.push(e);

    console.log(JSON.stringify(enrollments))

    limparFormulario()
})