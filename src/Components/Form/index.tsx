import React, { useEffect, useState } from 'react'
import TextInput from '../TextInput'
import { FormDataProps, FormProps, commonProps } from '../types';
import { MockApiUrl, formOne, formTwo } from '../Resources';
import Button from '../Button';
import axios from 'axios';
import RadioButton from '../RadioButton';

const initialData = {
    jobTitle: '',
    company: '',
    industry: '',
    location: '',
    workType: '',
    type: '',
    minexperience: '',
    maxexperience: '',
    minsalary: '',
    maxsalary: '',
    employees: '',
    id: ''
};

const initialError = {
    jobTitle: '',
    company: '',
    industry: '',
}

const CreateForm = ({ modalopenclose, id }: FormProps) => {
    const [formData, setformData] = useState<FormDataProps>(initialData);
    const [error, setError] = useState<commonProps>(initialError);
    const [step, setStep] = useState(true);

    useEffect(() => {
        if (id) {
            axios.get(`${MockApiUrl}/${id}`).then(res => {
                const { data } = res;
                setformData(data)
            })
        }
    }, []);

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value })
        setError({ ...error, [name]: '' })
    };

    const nextAction = () => {
        // errorValidation();
        setStep(false)
    }
    const previosAction = () => {
        // errorValidation();
        setStep(true)
    }
    const saveAction = () => {
        if (formData.jobTitle && formData.company && formData.industry) {
            if (id) {
                axios.put(`${MockApiUrl}/${id}`, formData).then(res => {
                    const { statusText } = res;
                    statusText && modalopenclose(false);
                })
            } else {
                axios.post(MockApiUrl, formData).then(res => {
                    const { statusText } = res;
                    statusText && modalopenclose(false);
                })
            }
        }
    }

    const { jobTitle, companyName, industry, location, remote } = formOne;
    const stepOne = (<>
        <TextInput change={change} value={formData['jobTitle']} error={error['jobTitle']} id={jobTitle.id} label={jobTitle.label} placeHolder={jobTitle.placeHolder} necessary={true} />
        <TextInput change={change} value={formData['company']} error={error['company']} id={companyName.id} label={companyName.label} placeHolder={companyName.placeHolder} necessary={true} />
        <TextInput change={change} value={formData['industry']} error={error['industry']} id={industry.id} label={industry.label} placeHolder={industry.placeHolder} necessary={true} />
        <div className='flex gap-6 w-full'>
            <TextInput change={change} value={formData['location']} id={location.id} label={location.label} placeHolder={location.placeHolder} necessary={false} />
            <TextInput change={change} value={formData['workType']} id={remote.id} label={remote.label} placeHolder={remote.placeHolder} necessary={false} />
        </div>
        <div className='w-full flex justify-end mt-24'>
            <Button action={nextAction} primary={true} name='Next' />
        </div></>)

    const { experience, salary, totalEmployee } = formTwo;
    const stepTwo = (<>
        <div className='flex gap-6 w-full'>
            <TextInput change={change} value={formData['minexperience']} id={experience.id} label={experience.label} placeHolder={experience.placeHolder} necessary={false} />
            <TextInput change={change} value={formData['maxexperience']} id={experience.id2} label={experience.label2} placeHolder={experience.placeHolder2} necessary={false} />
        </div>
        <div className='flex gap-6 w-full'>
            <TextInput change={change} value={formData['minsalary']} id={salary.id} label={salary.label} placeHolder={salary.placeHolder} necessary={false} />
            <TextInput change={change} value={formData['maxsalary']} id={salary.id2} label={salary.label2} placeHolder={salary.placeHolder2} necessary={false} />
        </div>
        <TextInput change={change} value={formData['employees']} id={totalEmployee.id} label={totalEmployee.label} placeHolder={totalEmployee.placeHolder} necessary={false} />
        <RadioButton change={change} selected={formData.type} />
        <div className='w-full flex justify-end mt-24'>
            <Button additionalClass='mr-6' action={previosAction} primary={false} name='Previous' />
            <Button action={saveAction} primary={true} name={formData.id ? 'Update' : 'Save'} />
        </div></>)

    return (
        <div>
            <div className='flex justify-between mb-6'>
                <p className='text-2xl'>Create Job</p>
                <p>{step ? 'Step 1' : 'Step 2'}</p>
            </div>
            {
                step ? stepOne : stepTwo
            }
        </div>
    )
}

export default CreateForm
