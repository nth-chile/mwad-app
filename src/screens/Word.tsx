import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Word = () => {
  console.log('hay')

  return <div className="h-full flex flex-col">
    <div className="flex justify-end pb-12">
      <Link className="inline-block" to="/settings">
        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.165 8.737H17a7.009 7.009 0 00-1.165-2.787l1.537-1.538a.837.837 0 000-1.18l-.605-.606a.838.838 0 00-1.181 0l-1.549 1.55a7.007 7.007 0 00-2.775-1.123V.835A.838.838 0 0010.428 0h-.856a.838.838 0 00-.835.835v2.243c-.997.19-1.92.59-2.72 1.153L4.412 2.626a.838.838 0 00-1.18 0l-.606.606a.838.838 0 000 1.18L4.243 6.03a7.01 7.01 0 00-1.11 2.708H.835A.838.838 0 000 9.572v.856c0 .46.376.835.835.835h2.298c.18.99.564 1.908 1.11 2.708l-1.617 1.616a.838.838 0 000 1.181l.606.606a.838.838 0 001.18 0l1.606-1.605c.8.562 1.722.963 2.719 1.153v2.243c0 .46.376.835.835.835h.856c.46 0 .835-.376.835-.835v-2.218a7.009 7.009 0 002.775-1.122l1.55 1.549a.838.838 0 001.18 0l.606-.606a.837.837 0 000-1.18l-1.538-1.538a7.01 7.01 0 001.166-2.787h2.163c.46 0 .835-.376.835-.835v-.856a.838.838 0 00-.835-.835zm-9.098 4.587a3.324 3.324 0 110-6.648 3.324 3.324 0 010 6.648z" fill="#A7AAB8"/></svg>
      </Link>
    </div>
    <div className="flex-1">
      <div className="vesper-libre mb-32" style={{ fontSize: 48 }}>जानना</div>
      <div className="mb-32">
        <div className="mb-22" style={{ color: 'var(--dark-grey)' }}>noun</div>
        <div>know, learn, understand, realize, be aware, cognize</div>
      </div>
      <div className="mb-32">
        <div className="mb-22" style={{ color: 'var(--dark-grey)' }}>verb</div>
        <div>know, learn, understand, realize, be aware, cognize</div>
      </div>
  </div>
    <div>
      <div className="text-center mb-52">
        <Link to="/word" className="inline-block underline" style={{ color: "var(--blue)" }}>
          Show a different word
        </Link>
      </div>
      <div>
        <Link to="word/report">
          <svg className="inline-block mr-9" width="16" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 19a1 1 0 01-2 0v-5H9v1a1 1 0 01-1 1H1a1 1 0 01-1-1V5a1 1 0 011-1h6V3a1 1 0 011-1h6V1a1 1 0 012 0v18zM9 4v1a1 1 0 01-1 1H2v8h5v-1a1 1 0 011-1h6V4H9z" fill="#FE6D73"/></svg>
          <div className="inline-block din" style={{ fontSize: 18, color: "var(--red)" }}>Report</div>
        </Link>
      </div>
    </div>
  </div>

  // return <div className="flex flex-col h-full">
  //   <div className="flex-grow">
  //     <p>Start by selecting the languages you’d like to learn.</p>
  //     <ul className="mt-18" style={{ fontSize: 18}}>
  //       {lis}
  //     </ul>
  //   </div>
  //   <div className="flex-shrink-0">
  //     <Link to="/welcome/langs" className="btn text-center block w-full">Continue</Link>
  //   </div>
  // </div>
}

export default Word