import React, {useEffect, useState} from "react"
import "./addRemoveInputStyle.css"
import {Clock, Dot, PlusCircleFill, RecordFill, X} from "react-bootstrap-icons";
import {useDispatch, useSelector} from "react-redux";
import {addNewSchedule, addNewSection, deleteSection, updateSection} from "../../../../../redux/actions/event";
import {Button} from "@mantine/core";

function AddRemoveInputSchedule({dataList, idEvent, step}) {

    const dispatch = useDispatch()

    let [inputList, setInputList] = useState(localStorage.getItem('sectionList') ? JSON.parse(localStorage.getItem('sectionList')) : []);

    useEffect(() => {
        if (dataList) {
            const list = [...inputList];
            setInputList(list);
            for (let key in dataList) {
                list[key] = dataList[key];
                setInputList(list);
            }
        }
    }, [dataList])

    //console.log(dataList, inputList)
    useEffect(() => {
        const stringifyed = JSON.stringify(inputList);
        localStorage.setItem('sectionList', stringifyed)
        console.log(stringifyed)

    }, [inputList])


    const handleInputChange = (e, index) => {

        const {name, value} = e.target;
        const list = [...inputList];

        list[index][name] = value;
        if (list[index].startTime.length === 5) {
            list[index].startTime = list[index].startTime + ':00'

        } else if (list[index].endTime.length === 5) {

            list[index].endTime = list[index].endTime + ':00'

        }

        setInputList(list);

        if (list[index].id) {
            dispatch(updateSection(list[index].id, list[index].name, list[index].startTime, list[index].endTime))
        }

    };


    // handle click event of the Remove button

    const handleRemoveClick = index => {
        const list = [...inputList];
        if (list[index].id) {
            dispatch(deleteSection(list[index].id));
        }
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const idSection = useSelector(state => state.event.idSection);
    const handleAddClick = () => {

        console.log('idSection: ' + idSection)
        setInputList([...inputList, {name: "", startTime: "00:00:00", endTime: "00:00:00"}]);

    };
    console.log(idEvent, idSection)

    let list = []
    for (let key in inputList) {
        if (inputList[key].id === undefined) {
            list.push(inputList[key]);
        }
    }
    // inputList.sort(function (a, b) {
    //     return a.startTime.localeCompare(b.startTime);
    // });


    return (
        <div className="field-add-remove-input" key={'uniqueValue'}>

            {inputList.map((x, i) => {
                return (
                    <div>

                        <section className="section-field">
                            <RecordFill className="icon-recordFill" size="20px" color="#206F6D"></RecordFill>
                            <input className="inputSchedule"
                                   name="name"
                                   placeholder='введите название...'
                                   value={x.name}
                                   onChange={(e) => handleInputChange(e, i)}
                            />
                            <input className="input-section-time"
                                   name="startTime"
                                   type={"time"}
                                   value={x.startTime}
                                   onChange={e => handleInputChange(e, i)}
                            />
                            <input className="input-section-time"
                                   name="endTime"
                                   type={"time"}
                                   value={x.endTime}
                                   onChange={e => handleInputChange(e, i)}
                            />

                            {inputList.length !== 1 &&
                                <button className="btn-remove-input" onClick={() =>
                                    handleRemoveClick(i)
                                }>
                                    <X size="30px" color="#206F6D"></X></button>
                            }

                        </section>

                        {inputList.length - 1 === i &&
                            <button className="btn-add-input" onClick={() => {
                                handleAddClick()
                                // dispatch(addNewSection( " ", '00:00:00', '00:00:00', idEvent))
                            }}>
                                <PlusCircleFill className="icon-plusCircleFill" size="28px"></PlusCircleFill>
                                добавить поле
                            </button>}

                    </div>

                );
            })}
            {inputList.length === 0 &&
                <button className="btn-add-input" onClick={() => {
                    //if(dataList.length>0)dispatch(addNewSection( " ", '00:00:00',  '00:00:00', idEvent))
                    handleAddClick()
                }}>
                    <PlusCircleFill className="icon-plusCircleFill" size="28px"></PlusCircleFill>
                    добавить поле
                </button>}
            <div className="btn-next-step" style={{top: '24.5vh'}}>
                <Button className="btn-forth-step" onClick={() => {
                    dispatch(addNewSchedule(list, idEvent));
                    step();
                }}>Далее</Button>
            </div>
        </div>
    );
}

export default AddRemoveInputSchedule