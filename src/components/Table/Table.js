import React, {useState} from 'react';
import Modal from '../Modal/Modal';
import { useFormik  } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../lib/style/generalStyles';
import {
    Wrapper,
    TableHead,
    TableBody,
    EventEmpty,
    MdDelete,
    ButtonAdd
} from './TableStyle';
import {
    Form,
    FormRow, 
    FormColumns,
    InputLabel,
    InputText,
    Select,
    Option,
    InputError,
    TextArea,
    ButtonSubmit
} from '../../lib/style/generalStyles';

const options = [
    { value: '', label: 'Select...'},
    { value: 'marketing', label: 'Marketing'},
    { value: 'frontend', label: 'Frontend'},
    { value: 'design', label: 'Design'},
    { value: 'backend', label: 'Backend'}
];

const firm = [
    { value: '', label: 'Select...'},
    { value: 'speck', label: 'Speck'},
    { value: 'five', label: 'Five'},
    { value: 'bornfight', label: 'Bornfight'},
    { value: 'agency04', label: 'Agency 04'}
];

const Table = () => {
    const [showModal, setShowModal] = useState(false);
    const [ events,setEvents] = useState([]);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            category: '',
            date: '',
            timeFrom: '',
            timeTo: '',
            capacity: '',
            firm: ''
        },
            validationSchema: Yup.object({
                title: Yup.string()
                    .required('Title is required'),
                description: Yup.string()
                    .required('Description is required'),
                category: Yup.string()
                    .required('Category is required'),
                date: Yup.string()
                    .required('Date is required'),
                timeFrom: Yup.string()
                    .required('Time from is required'),
                timeTo: Yup.string()
                    .required('Time to required'),
                capacity: Yup.string()
                    .required('Capacity is required'),
                firm: Yup.string()
                    .required('Firm is required'),            
            }),
            onSubmit:(values, {resetForms}) => {
                setEvents({
                    ...events,
                    values
                });
                setShowModal(false);
                resetForms({});
            },
    });

    const deleteEvent = id => {
        let eventsUpdated = [...events];
        eventsUpdated.splice(id, 1);

        setEvents(eventsUpdated);
    };
 
return (
    <>
         <ButtonAdd onClick={() => setShowModal(true)}>Add event</ButtonAdd>
            {events.length > 0
                ? <Wrapper>
                    <TableHead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Time from</th>
                            <th>Time to</th>
                            <th>Capacity</th>
                            <th>Firm</th>
                            <th></th>
                        </tr>
                    </TableHead>
                    <TableBody>
                        {events.map(event => 
                            <tr key={event.id}>
                                <td>{event.title}</td>
                                <td>{event.date}</td>
                                <td>{event.timeFrom}</td>
                                <td>{event.timeTo}</td>
                                <td>{event.capacity}</td>
                                <td>{event.company}</td>
                                <td>
                                    <MdDelete onClick={() => deleteEvent(event.id)}/>
                                </td>
                            </tr>
                        )}
                    </TableBody>
                </Wrapper> 
                : <EventEmpty>There are no events yet!</EventEmpty>
                    }
                { showModal && 
                    <Modal modalClose = {() => setShowModal(false)}>
                         <Form  onSubmit={formik.handleSubmit}>
                            <FormRow>
                                <InputLabel htmlFor="title">Title</InputLabel>
                                <InputText 
                                    id='title'
                                    type='text'
                                    {...formik.getFieldProps('title')}
                                />
                                {formik.touched.title && formik.errors.title
                                ? <InputError>{formik.errors.title}</InputError>
                                : null
                                }
                            </FormRow>
                            <FormRow>
                                <InputLabel htmlFor="description">Description</InputLabel>
                                <TextArea
                                    id='description'
                                    type='text'
                                    {...formik.getFieldProps('description')}
                                />
                                {formik.touched.description && formik.errors.description
                                ?<InputError>{formik.errors.description}</InputError>
                                : null
                                }
                            </FormRow>
                        <FormColumns>
                            <FormRow>
                                <InputLabel htmlFor="category">Category</InputLabel>
                                <Select
                                    id='category'
                                    {...formik.getFieldProps('category')}
                                >
                                    {options.map((option) => 
                                    <Option value={option.value}>{option.label}</Option>
                                    )}
                                </Select>
                                {formik.touched.category && formik.errors.category
                                ? <InputError>{formik.errors.category}</InputError>
                                : null
                                }
                            </FormRow>
                            <FormRow>
                                <InputLabel htmlFor="date">Date</InputLabel>
                                <InputText
                                    id='date'
                                    type='text'
                                    {...formik.getFieldProps('date')}
                                />
                                {formik.touched.date && formik.errors.date
                                ? <InputError>{formik.errors.date}</InputError>
                                : null
                                }
                            </FormRow>
                         </FormColumns>
                         <FormColumns>
                            <FormRow>
                                <InputLabel htmlFor="timeFrom">Time from</InputLabel>
                                <InputText
                                    id='timeFrom'
                                    type='text'
                                    {...formik.getFieldProps('timeFrom')}
                                />
                                {formik.touched.timeFrom && formik.errors.timeFrom
                                ? <InputError>{formik.errors.timeFrom}</InputError>
                                : null
                                }
                             </FormRow>
                             <FormRow>
                                <InputLabel htmlFor="timeTo">Time to</InputLabel>
                                <InputText
                                    id='timeTo'
                                    type='text'
                                    {...formik.getFieldProps('timeTo')}
                                />
                                {formik.touched.timeTo && formik.errors.timeTo
                                ? <InputError>{formik.errors.timeTo}</InputError>
                                : null
                                }
                            </FormRow>
                        </FormColumns>
                        <FormColumns>
                            <FormRow>
                                <InputLabel htmlFor="capacity">Capacity</InputLabel>
                                <InputText
                                    id='capacity'
                                    type='text'
                                    {...formik.getFieldProps('capacity')}
                                />
                                {formik.touched.capacity && formik.errors.capacity
                                ? <InputError>{formik.errors.capacity}</InputError>
                                : null
                                }
                            </FormRow>
                            <FormRow>
                                <InputLabel htmlFor="company">Company</InputLabel>
                                <Select

                                    id='company'
                                    {...formik.getFieldProps('company')}
                                >
                                    {firm.map((option) =>
                                    <Option value={option.value}>{option.label}</Option>
                                    )}
                                </Select>
                                {formik.touched.company && formik.errors.company
                                ? <InputError>{formik.errors.company}</InputError>
                                : null
                                }
                             </FormRow>
                            </FormColumns>
                             <FormRow>
                                <Button type="submit" text="Add event"/>
                            </FormRow>
                        </Form>
                    </Modal>
                }
         </>
    );
}
export default Table;