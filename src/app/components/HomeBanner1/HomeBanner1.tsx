import React from 'react'
import CircularProgress from '@mui/joy/CircularProgress';
import { AiOutlineEye } from 'react-icons/ai'
import './HomeBanner1.css'


const HomeBanner1 = () => {
const [data,setData] = React.useState<any>(null)
const getData = async () => {
   
    {
    fetch(process.env.NEXT_PUBLIC_BACKEND_API+'/report/getreport',{           //to ensure the data is fetched according to the signed user
      method:'GET',
      credentials:'include'
    })
    .then(res => res.json())
    .then(data => {
      if(data.ok){
        setData(data.data)      //to set the corresponding data onto the card
      }
      else {
        setData([])
      }
    })
    .catch(err => {
      console.log(err)
      setData([])
    })
    
  }
}
React.useEffect(() => {
    getData()
},[])
// function simplifyFraction(numerator: number, denominator: number): [number, number] {
//   function gcd(a: number, b: number): number {
//     return b === 0 ? a : gcd(b, a % b);
//   }
//   const commonDivisor: number = gcd(numerator, denominator);

//   // Simplify the fraction
//   const simplifiedNumerator: number = numerator / commonDivisor;
//   const simplifiedDenominator: number = denominator / commonDivisor;

//   return [simplifiedNumerator, simplifiedDenominator];
// }
  return (
    
    <div className='meters'>
      {data?.length >0 && data.map((item:any,index:number) => {
        return(
          <div className='card' key={index}>
          <div className='card-header'>
            <div className='card-header-box'>
              <div className='card-header-box-name'>{item.name}</div>
              <div className='card-header-box-value'>{parseInt(item.value)} {item.unit}</div>
            </div>
            <div className='card-header-box'>
              <div className='card-header-box-name'>Target</div>
              <div className='card-header-box-value'>{parseInt(item.goal)} {item.goalUnit}</div>
            </div>
          </div>
          <CircularProgress className='circular'
                color='neutral'
                determinate
                size="lg"
                value={
                  (item.value / item.goal) * 100
                }
            >
            <div className='textincircle'>
                <span>
                  {
                  parseInt(item.value)
                  }
                </span>
                <span className='hrline'></span>
                <span>
                  {
                    parseInt(item.goal)
                  }
                </span>
            </div>
           </CircularProgress>
           <button
           onClick={()=>{
            window.location.href=`/report/${item.name}`
           }}>Show report<AiOutlineEye /></button>
        </div> 

        )
       })
    }
  </div>
  )
    }
export default HomeBanner1