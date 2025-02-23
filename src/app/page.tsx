'use client';

export default function Home() {

  function fetchCode(){
    fetch('/api',{})
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const codeElement = document.querySelector('.code');
        if (codeElement) {
          codeElement.textContent = data.code;
        }
      });
  }

  return (
    <div className="container">
      <div className="generate">
        <h2 className="code"></h2>
        <button onClick={fetchCode}>Generate Code</button>
      </div>
    </div>
  );
}
