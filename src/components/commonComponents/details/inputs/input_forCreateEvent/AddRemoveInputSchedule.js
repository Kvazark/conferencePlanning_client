import {useEffect, useState} from "react"
import "./addRemoveInputStyle.css"
import {Clock, Dot, PlusCircleFill, RecordFill, X} from "react-bootstrap-icons";
import {useDispatch, useSelector} from "react-redux";
import {addNewSection, updateSection} from "../../../../../redux/actions/event";

function AddRemoveInputSchedule({dataList, idEvent}) {

    const dispatch = useDispatch()

    //let [categoryList, setCategoryList] = useState(localStorage.getItem('categoryList')? JSON.parse(localStorage.getItem('categoryList')): [{}])

    // const [inputList, setInputList] = useState([{sectionTitle: "", startTime: "", endTime: ""}]);
    let [inputList, setInputList] = useState(localStorage.getItem('sectionList') ? JSON.parse(localStorage.getItem('sectionList')) : [{
        name: "",
        startTime: "",
        endTime: ""
    }])

    // if (JSON.parse((localStorage.getItem("sectionList")) === " ")) {
    //     localStorage.setItem("sectionList", JSON.stringify(inputList));
    // }
    const [stop, setStop] = useState('')
    useEffect(() => {
        if(dataList.length===0) setStop('false')
        else setStop('true')
        if (Object.keys(inputList).length === 1) {
            if (dataList) {
                const list = [...inputList];
                setInputList(list);
                if (Object.keys(inputList).length < Object.keys(dataList).length) {
                    for (let key in dataList) {
                        list[key] = dataList[key];
                        setInputList(list);
                    }
                }
            }
        }
    }, [dataList])
    //console.log(inputList)
    useEffect(() => {
        const stringifyed = JSON.stringify(inputList);
        localStorage.setItem('sectionList', stringifyed)
        //
    }, [inputList])
    //  console.log(inputList)

    // handle input changeconsole.log('s'+inputList)

    const handleInputChange = (e, index) => {

        const {name, value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
        console.log(inputList.length, dataList.length, stop)
        if (inputList.length === 1) {
            if (dataList.length === 0 && stop === false) {
                setStop(true)
                dispatch(addNewSection(list[index].name = " ", list[index].startTime = '00:00:00', list[index].endTime = '00:00:00', idEvent))
            }
            if (stop === true) {
                if (list[index].startTime.length === 5) {
                    if (list[index].endTime.length === 5) {
                        dispatch(updateSection(list[index].id, list[index].name, list[index].startTime + ':00', list[index].endTime + ':00'))
                    } else {
                        dispatch(updateSection(list[index].id, list[index].name, list[index].startTime + ':00', list[index].endTime))
                    }
                } else {
                    if (list[index].endTime.length === 5) {
                        dispatch(updateSection(list[index].id, list[index].name, list[index].startTime, list[index].endTime + ':00'))
                    } else {
                        dispatch(updateSection(list[index].id, list[index].name, list[index].startTime, list[index].endTime))
                    }
                }
            }
        } else {
            if (list[index].startTime.length === 5) {
                if (list[index].endTime.length === 5) {
                    dispatch(updateSection(list[index].id, list[index].name, list[index].startTime + ':00', list[index].endTime + ':00'))
                } else {
                    dispatch(updateSection(list[index].id, list[index].name, list[index].startTime + ':00', list[index].endTime))
                }
            } else {
                if (list[index].endTime.length === 5) {
                    dispatch(updateSection(list[index].id, list[index].name, list[index].startTime, list[index].endTime + ':00'))
                } else {
                    dispatch(updateSection(list[index].id, list[index].name, list[index].startTime, list[index].endTime))
                }
            }
        }
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, {name: "", startTime: "", endTime: ""}]);
    };
    const getNumber = t => +t.replace(/:/g, '')
    let sortedList = inputList.sort(({startTime: a}, {startTime: b}) => getNumber(a) - getNumber(b))
    //console.log(inputList)
    useEffect(() => {
        if (sortedList.length === 1 && inputList.startTime === 'undefined') {
            setInputList([{name: " ", startTime: "00:00", endTime: "00:00"}]);
            console.log('s' + inputList)
            //dispatch(addNewSection(name, x.startTime, x.endTime, idEvent))
        }
    })

    return (
        <div className="field-add-remove-input" key={'uniqueValue'}>

            {sortedList.map((x, i) => {
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
                                <button className="btn-remove-input" onClick={() => handleRemoveClick(i)}>
                                    <X size="30px" color="#206F6D"></X></button>
                            }

                        </section>

                        {inputList.length - 1 === i &&
                            <button className="btn-add-input" onClick={() => {
                                handleAddClick()
                                dispatch(addNewSection(x.name = " ", x.startTime = '00:00:00', x.endTime = '00:00:00', idEvent))
                            }}>
                                <PlusCircleFill className="icon-plusCircleFill" size="28px"></PlusCircleFill>
                                добавить поле
                            </button>}

                    </div>

                );
            })}
            {/*<div>*/}
            {/*    {JSON.stringify(inputList)}*/}
            {/*</div>*/}
        </div>
    );
}

export default AddRemoveInputSchedule