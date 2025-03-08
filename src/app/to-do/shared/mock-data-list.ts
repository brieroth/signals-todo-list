import moment from "moment";
import { TODO } from "./models/todo.model";

export const Items : TODO[]  = [
    {
        id: 1,
        title: 'Schedule team check in',
        status: false,
        dateCreated: moment('2025-02-11T12:30:00Z'),
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
        id: 2,
        title: 'Research vendors for team retreat',
        status: true,
        dateCreated: moment('2025-02-06T12:30:00Z'),
        description: 'book venue, caterers and decorators'
    },
    {
        id: 3,
        title: 'Get ingredients for bake sale',
        status: false,
        dateCreated: moment('2025-02-11T12:30:00Z'),
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
        id: 4,
        title: 'Complete expense report for client meeting',
        status: true,
        dateCreated: moment('2025-02-11T12:30:00Z'),
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
        id: 5,
        title: 'Book flights & accommodation for summer vacation',
        status: true,
        dateCreated: moment('2025-02-11T12:30:00Z'),
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
        id: 6,
        title: 'Book flights & accommodation for summer vacation',
        status: true,
        dateCreated: moment('2025-02-11T12:30:00Z'),
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
        id: 7,
        title: 'Book flights & accommodation for summer vacation',
        status: false,
        dateCreated: moment('2025-02-11T12:30:00Z'),
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    }
]