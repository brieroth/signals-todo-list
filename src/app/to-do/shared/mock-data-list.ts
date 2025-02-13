import moment from "moment";
import { TODO } from "./models/todo.model";

export const Items : TODO[]  = [
    {
        id: 1,
        title: 'Schedule team check in',
        status: false,
        dateCreated: moment('02-05-2019'),
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
        id: 2,
        title: 'Research vendors for team retreat',
        status: true,
        dateCreated: moment('2024-06-29'),
        dateCompleted:  moment('2024-08-29'),
        description: 'book venue, caterers and decorators'
    },
    {
        id: 3,
        title: 'Get ingredients for bake sale',
        status: false,
        dateCreated: moment('2025-01-05'),
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
        id: 4,
        title: 'Complete expense report for client meeting',
        status: true,
        dateCreated: moment('2025-01-05'),
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
        id: 5,
        title: 'Book flights & accommodation for summer vacation',
        status: true,
        dateCreated: moment('2025-01-05'),
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    }
]