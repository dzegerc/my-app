import React, {useState} from 'react';
import Modal from '../Modal/Modal';
import { useFormik  } from 'formik';
import * as Yup from 'yup';
import { VscTrash } from 'react-icons/vsc';
import {
    TableOptions,
    TableWrapper,
    TableHead,
    TableBody,
    Th,
    Tr,
    Td,
    TableEmpty,
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
    TextArea
} from '../../lib/style/generalStyles';
import { map } from 'lodash';

const company = [
    'Speck' ,
    'Five',
    'Bornfight',
    'Agency 04'
];
const category = [
    {
        value: 'marketing',
        label: '#marketing'
    },
    {
        value: 'design',
        label: '#design'
    },
    {
        value: 'frontend',
        label: '#frontend'
    },
    {
        value: 'backend',
        label: '#backend'
    }
];
const Table = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [ events,setEvents] = useState([]);

    const formik = useFormik({
        initialValues: {
            id: 1,
            title: '',
            description: '',
            date: '',
            category: '',
            timeFrom: '',
            timeTo: '',
            capacity: '',
            company: ''
        },
            validationSchema: Yup.object({
                title: Yup.string()
                    .required('Title is required'),
                description: Yup.string()
                    .required('Description is required'),
                date: Yup.string()
                    .required('Date is required'),
                category: Yup.string()
                    .required('Category is required'),
                timeFrom: Yup.string()
                    .required('Time from is required'),
                timeTo: Yup.string()
                    .required('Time to required'),
                capacity: Yup.string()
                    .required('Capacity is required'),
                company: Yup.string()
                    .required('Company is required'),            
            }),
            onSubmit:(values, {resetForms}) => {
                setEvents({
                    ...events,
                    values
                });
                setIsShowModal(false);
                resetForms({});
            },
    });
    const handleDeleteEvent = index => {
        let eventsUpdated = [...events];
        eventsUpdated.splice(index, 1);

        setEvents(eventsUpdated);
    };

return (
    <>
        {isShowModal &&
            <Modal
                title="Add event"
                handleModalClose={() => setIsShowModal(false)}>
                    <Form fullWidth={true} onSubmit={formik.handleSubmit}>
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
                                    <Option value="">Select...</Option>
                                    {category.map(category => <Option key={category.value} value={category.value}>{category.label}</Option>)}
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
                                    <Option value="">Select...</Option>
                                    {company-map((company, index) => <Option key={index} value={company}>{company}</Option>)}
                                </Select>
                                {formik.touched.company && formik.errors.company
                                ? <InputError>{formik.errors.company}</InputError>
                                : null
                                }
                            </FormRow>
                        </FormColumns>
                        <FormRow>
                            <ButtonAdd type="add">Add event</ButtonAdd>
                        </FormRow>
                    </Form>
                </Modal>
            }
            <TableOptions>
                <ButtonAdd onClick={{} = setIsShowModal(true)}>Add event</ButtonAdd>
            </TableOptions>
            {events.length > 0
                ? <TableWrapper>
                    <TableHead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Title</Th>
                            <Th>Date</Th>
                            <Th>Time from</Th>
                            <Th>Time to</Th>
                            <Th>Capacity</Th>
                            <Th>Company</Th>
                            <Th></Th>
                        </Tr>
                    </TableHead>
                    <TableBody>
                        {events.map[(event, index) => 
                            <Tr key={index}>
                                <Td>{event.id}</Td>
                                <Td>{event.title}</Td>
                                <Td>{event.date}</Td>
                                <Td>{event.timeFrom}</Td>
                                <Td>{event.timeTo}</Td>
                                <Td>{event.capacity}</Td>
                                <Td>{event.company}</Td>
                                <VscTrash>
                                    <MdDelete onClick={() => handleDeleteEvent(index)}/>
                                </VscTrash>
                            </Tr>]
                        }
                    </TableBody>
                </TableWrapper> 
                : <TableEmpty>There are no events yet!</TableEmpty>
                    })
        </>
);
}
export default Table;