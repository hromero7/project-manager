import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Dropdown } from "react-bootstrap";
import TaskAPI from "../../Utils/TaskAPI";

const TaskAssignee = (props) => {
    const [value, setValue] = useState("");
    const [getSearchData, setGetSearchData] = useState(false);
    const [show, setShow] = useState(false);
    const [searchList, setSearchList] = useState("");
    const [checked, setChecked] = useState([]);

    useEffect(() => {
      console.log(searchList);
      console.log(checked)
      if(searchList.length > 1 && props.assignee.length > 1) {
        for(let i = 0; i < searchList.length; i++) {
          const verifyChecked = props.assignee.find((user) =>
            user.username === searchList[i].username);
            if(verifyChecked) checked[i] = true;
            console.log(checked[i], i);
        }
      // const verifyChecked = searchList.map((user, i) => 
      //   props.assignee[i].username === user.username);
      //   if (verifyChecked) setChecked(verifyChecked);
      } else if (searchList.length === 1){
        const verifyChecked = props.assignee.find((user) =>
        user.username === searchList[0].username);
        // console.log(verifyChecked, "line 24")
        if (verifyChecked) setChecked([true]);
        console.log(checked);
      }
      //setChecked(new Array(searchList.length).fill(false));
    }, [searchList])

    // const verifyChecked = (e) => {
    //   e.preventDefault()
    //   console.log("e.target")
    //   const user = props.assignee.find((user) => 
    //     e.target.attributes["username"].value === user.username
    //   )
    //   if (user) return true;
    //   else return false
    // }

    const handleAssignTask = async (e, index) => {
      console.log(checked);
        // const checked = e.target.checked;
        // const state = checked.find(check => e.target.attributes["username"].value === check[e.target.attributes["username"].value].username)
        // if (state) {
        //   checked[state] = { username: state.username, isChecked: true };
        // }
     
          // setChecked({...checked}, {username: e.target.attributes["username"].value, isChecked: true});
        const user = { 
                    id: e.target.attributes["userId"].value, 
                    username : e.target.attributes["username"].value
                  }
        if (!checked[index]) {
          const res = await TaskAPI.addAssignee(props.projectId, props.taskId, user);
          const updatedChecked = checked.map((item, i) =>
            i === index ? !item : item
          );
          setChecked(updatedChecked);
          console.log(res);
        } else {
          const userId = e.target.attributes["userId"].value
          const res = await TaskAPI.removeAssignee(props.projectId, props.taskId, userId);
          // const updatedChecked = checked.filter((item, i) =>
          //   i === index
          // );
          const updatedChecked = checked.map((item, i) =>
            i === index ? !item : item
          );
          setChecked(updatedChecked);
          console.log(res);

        }
        props.getProjectData();
    }

    //const handleRemoveAssignee = async(e) => {
      // console.log(e.target.checked)
      // const state = checked.find(check => e.target.attributes["username"].value === check[e.target.attributes["username"].value].username)
      // checked[state] = { username: state.username, isChecked: false };
      // const userId = e.target.attributes["userId"].value
      // const res = await TaskAPI.removeAssignee(props.projectId, props.taskId, userId);
      //   console.log(res);
      //   props.getProjectData();
    //}

    const CustomUserAddToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a 
            href=""
            ref={ref}
            onClick={(e) => {
            e.preventDefault();
            onClick(e);
            }}>
            {children} 
        </a>
        ));

        const taskMenu = React.forwardRef(
        ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
            return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <ul className="list-unstyled"></ul>
                {children}
            </div>
            );
        }
        );
    return (
        <Dropdown
        autoClose="outside"
        // onToggle={() => setOpen(!open)}
        // show={open}
        >
          <Dropdown.Toggle
            as={CustomUserAddToggle}
            id="dropdown-custom-components"
          >
             <i className="fa-solid fa-circle-plus"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu as={taskMenu}>
            <Dropdown.Header>
              Add a member:
            </Dropdown.Header>

            <Form.Control
              autoFocus
              className="mx-3 my-2 w-auto"
              placeholder="Search to add..."
              autoComplete="off"
              onChange={(e) => {
                if (e.target.value.length <= 1) {
                  setGetSearchData(false);
                } else {
                  axios
                    .get(
                      `/api/user/finduser/${e.target.value}`
                    )
                    .then((res) => {
                      // console.log("res: ", res.data);
                      setSearchList(res.data);
                      setGetSearchData(true);
                    })
                    .catch((err) =>
                      console.log("err: ", err)
                    );
                }

                setValue(e.target.value);
              }}
              value={value}
            />
            <Dropdown.Divider />
            {getSearchData ? (
              searchList.map((searchItem, i) => {
                return (
                  <Dropdown.Item as="form" key={searchItem._id}>
                    <Form>
                      {/* {
                        props.assignee.find((user) => 
                        searchItem.username === user.username)? 
                        <Form.Check 
                        type="switch"
                        //checked={checked[searchItem.username]? checked[searchItem.username].isChecked : ""}
                        id="custom-switch"
                        username={searchItem.username}
                        userId={searchItem._id}
                        onClick={handleRemoveAssignee}
                        label={searchItem.username}
                      ></Form.Check> :
                      <Form.Check 
                        type="switch"
                        checked={checked[i]}
                        id="custom-switch"
                        username={searchItem.username}
                        userId={searchItem._id}
                        onChange={() => handleAssignTask(i)}
                        label={searchItem.username}
                      ></Form.Check>
                      } */}
                      <Form.Check 
                        type="switch"
                        checked={checked[i]}
                        id="custom-switch"
                        username={searchItem.username}
                        userId={searchItem._id}
                        onChange={(e) => handleAssignTask(e, i)}
                        label={searchItem.username}
                      ></Form.Check>
                    </Form>
                  </Dropdown.Item>
                );
              })
            ) : (
              <Dropdown.Item
                eventKey="1"
                // onClick={console.log(
                //   "searchList",
                //   searchList
                // )}
              >
                List All Members  
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
    )
}

export default TaskAssignee;
