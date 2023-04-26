import React, { useState } from 'react'
import tableA from './api/mock_stores.json'
import '../src/style.scss'
import {sumRow} from './api/sum'
import {sumColumn, sumSuper} from './api/sum'



function App() {

  const [table, setTable] = useState(tableA)

  const initialTotalStore = tableA.map(item => sumRow(item.months))

  const [totalStore, setTotalStore] = useState(initialTotalStore);

  const initialTotalMonth = sumColumn(tableA)

  const [totalMonth, setTotalMonth] = useState(initialTotalMonth);

  const superSum = sumSuper(totalMonth)




  const handleChange = (e, row, column) => {
    
    console.log(e.target.value)

    const {value} = e.target
    

    if(isNaN(Number(value))){
      return
    }


    const _table = [...table]
    _table[row].months[column].value = value
    setTable(_table)

    const newTotalStore = [...totalStore]
    const total = sumRow(table[row].months)

    newTotalStore[row] = total
    setTotalStore(newTotalStore)
    setTotalMonth(sumColumn(table))


  }

   return (
   <div>

    <div className='table'> Main Table</div>
   
    
<div className='wrap'>
     <div className='stl3'>TITLE</div>

    {table[0].months.map((item, key) => (

    <div className='stl2'key={key + '123'}>{item.name}</div>

      

    ))}
    <div className='stl3'>SUM</div>
    </div>

   {console.log(tableA)}

   {table.map((item, row) => (
    <div className='wrap' key={item.store.id}>
       <div className='stl'>{item.store.name}</div>

       {item.months.map((subItem, column) =>(

        <input 
        key={subItem.id}
        
        className='stl2'
        onChange={(e) => handleChange(e, row, column)} 
        value={subItem.value !== 0 ? subItem.value: ""}
        placeholder='0'
        />
))}

       <div className='stl'>  
       {totalStore[row]}
       </div>

       

    </div>
   
   ))}

<div className='wrap'>
     <div className='stl3'>TITLE</div>

    {totalMonth.map((item, key) => (

    <div className='stl2'key={key + '123'}>{item}</div>

      

    ))}
    <div className='stl'>{superSum}</div>
    </div>

</div> 
   
  )}

export default App