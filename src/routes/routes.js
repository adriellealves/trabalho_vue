import Home from '../pages/Home';
import ListStudents from '../pages/ListStudents';
import Register from '../pages/Register';
import Edit from '../pages/Edit';

export default [

    {

        path: '/',
        component: Home

    },
    {

        path: '/students',
        component: ListStudents

    },
    {

        path: '/register',
        component: Register

    }
    ,
    {

        path: '/edit/:id',
        component: Edit

    }

]