import React, { useEffect, useState } from 'react'
import MyTodoItem from './MyTodoItem'
import Addtodo from './Addtodo';


export default function Todos() {

    let initTodo;

    if (localStorage.getItem("todosobj") === null) {
        initTodo = [];
    }
    else {
        initTodo = JSON.parse(localStorage.getItem("todosobj"));
    }



    const onDelete = (todoobj) => {
        console.log("i am deleting", todoobj);
        setTodos(todosobj.filter((e) => {
            return e !== todoobj;
        }));
        localStorage.setItem("todosobj", JSON.stringify(todosobj));
    }


    const addtodocall = (title, desc) => {
        console.log(`Title: ${title} and Desc:${desc} `);
        let id;
        if (todosobj.length === 0) {
            id = 0;
        }
        else {
            id = todosobj[todosobj.length - 1].id + 1;
        }

        const newtodoobj = {
            id: id,
            title: title,
            desc: desc
        }
        setTodos([...todosobj, newtodoobj])
        console.log(newtodoobj);


        localStorage.setItem("todosobj", JSON.stringify(todosobj));


    }


    const [todosobj, setTodos] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem("todosobj", JSON.stringify(todosobj));
    }, [todosobj])

    return (


        <div className="container my-3">
            <Addtodo addtodocall={addtodocall} />
            <hr />
            <h3 className="text-center">Todos List</h3>

            <div className="row">

                {
                    todosobj.length === 0 ? "no data found" :

                        todosobj.map((todosobj) => {
                            return <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                                <MyTodoItem todoobj={todosobj} key={todosobj.id} ondelete={onDelete} />
                            </div>
                        })
                }
            </div>





        </div>
    )
}
