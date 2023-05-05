import {useCallback, useEffect, useState} from "react";
import {PlusCircleFill, RecordFill, X} from "react-bootstrap-icons";
import "./addRemInputCategory.css"

function AddRemoveInputCategory({dataList}) {
    console.log("datalist:  "+JSON.stringify(dataList))

    //let [categoryList, setCategoryList] = useState([{}]);

   let [categoryList, setCategoryList] = useState(localStorage.getItem('categoryList')? JSON.parse(localStorage.getItem('categoryList')): [{}])


    if (JSON.parse((localStorage.getItem("categoryList")) === " ")) {
        localStorage.setItem("categoryList", JSON.stringify(categoryList));
    }
    useEffect(()=>{
        if (Object.keys(categoryList).length === 1){
            if (dataList) {
                const list = [...categoryList];
                setCategoryList(list);
                if (Object.keys(categoryList).length < Object.keys(dataList).length) {
                    for (let key in dataList) {
                        list[key] = dataList[key];
                        setCategoryList(list);
                    }
                }
            }
        }
    }, [dataList])


    useEffect(() => {
        const stringifyed = JSON.stringify(categoryList);
        localStorage.setItem('categoryList', stringifyed)
    }, [categoryList])

    console.log("categoryList:  "+JSON.stringify(categoryList))

    // handle input change
    const handleInputChange = (e, index) => {
        const {value} = e.target;
        const list = [...categoryList];
        list[index] = value;
        setCategoryList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...categoryList];
        list.splice(index, 1);
        setCategoryList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setCategoryList([...categoryList, {}]);
    };
    // const f =()=>{
    //     dataList?.map((item,i)=>{
    //         handleInputChange(item,i)
    //     })
    // }
    // f()
    return (
        <div className="field-add-remove-input-category">

            {categoryList?.map((x, i) => {
                return (
                    <div key={i}>
                        <section className="category-field">
                            {/*<RecordFill className="icon-recordFill" size="20px" color="#206F6D"></RecordFill>*/}
                            <input className="inputCategory"
                                    name="nameCategory"
                                // placeholder={dataList[i] ? dataList[i] : "введите название категории"}
                                   placeholder={"введите название категории"}
                                   // value={x.nameCategory}
                                   value={x!='[object Object]'? x: ''}
                                   onChange={e => handleInputChange(e, i)}
                            />

                            {categoryList.length > 1 &&
                                <button className="btn-remove-input-category" type="button"onClick={() => handleRemoveClick(i)}>
                                    <X size="25px" color="#206F6D"></X></button>
                            }

                        </section>
                        {categoryList.length - 1 === i &&
                            <button className="btn-add-input-category" onClick={handleAddClick}>
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

export default AddRemoveInputCategory