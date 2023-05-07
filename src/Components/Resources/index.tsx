export const MockApiUrl = 'https://64482cc47bb84f5a3e544576.mockapi.io/apiv1'

//Color Codes

export const primaryBlue = '#1597E4';
export const whiteBg = '#FFFFFF';
export const border = '#E6E6E6';
export const errorColor = '#D86161';
export const placeHolder = '#7A7A7A';
export const darkFont = '#212121';
export const lightFont = '#FAFAFA';

export const formOne = {
    jobTitle: { id: 'jobTitle', label: 'Job title', placeHolder: 'ex. UX UI Designer' },
    companyName: { id: 'company', label: 'Company name', placeHolder: 'ex. Google' },
    industry: { id: 'industry', label: 'Industry', placeHolder: 'ex. Information Technology' },
    location: { id: 'location', label: 'Location', placeHolder: 'ex. Chennai' },
    remote: { id: 'workType', label: 'Remote type', placeHolder: 'ex. In-office' },
}
export const formTwo = {
    experience: { id: 'minexperience', id2: 'maxexperience', label: 'Experience', label2: '', placeHolder: 'ex. Minimum', placeHolder2: 'ex. Maximum' },
    salary: { id: 'minsalary', id2: 'maxsalary', label: 'Salary', label2: '', placeHolder: 'ex. Minimum', placeHolder2: 'ex. Maximum' },
    totalEmployee: { id: 'employees', label: 'Total employee', placeHolder: 'ex. 100', },
}

export const sampleData = [
    {
        jobTitle: 'UX UI Designer',
        company: 'Great Vibes - Information Technology',
        location: 'Chennai, TamilNadu',
        workType: 'Remote',
        type: 'Part- time (9.00am - 5.00pm IST)',
        minexperience: "1",
        maxexperience: "2",
        minsalary: "30,000",
        maxsalary: "50,000",
        experience: '(1 - 2years)',
        salary: 'INR 30,000 - 50,000 / Month',
        employees: '51-200',
    },
    {
        jobTitle: 'Developer',
        company: 'Great Vibes - Information Technology',
        location: 'Chennai, TamilNadu',
        workType: 'Remote',
        type: 'Part- time (9.00am - 5.00pm IST)',
        minexperience: "0",
        maxexperience: "2",
        minsalary: "50,000",
        maxsalary: "70,000",
        experience: '(1 - 2years)',
        salary: 'INR 30,000 - 50,000 / Month',
        employees: '51-200',
    },
    {
        jobTitle: 'Seo Analyst',
        company: 'Great Vibes - Information Technology',
        location: 'Chennai, TamilNadu',
        workType: 'Remote',
        type: 'Part- time (9.00am - 5.00pm IST)',
        experience: '(1 - 2years)',
        salary: 'INR 30,000 - 50,000 / Month',
        employees: '51-200',
    },
];