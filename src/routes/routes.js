import Home from '../pages/Home';
import ListStudents from '../pages/ListStudents';
import Store from '../pages/Store';
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

        path: '/store',
        component: Store

    }
    ,
    {

        path: '/edit/:id',
        component: Edit

    }

]