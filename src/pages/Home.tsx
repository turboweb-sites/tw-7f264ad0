export default function Home() {
  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f172a,#581c87,#0f172a)',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{textAlign:'center'}}>
        <div style={{width:64,height:64,border:'4px solid #a855f7',borderTopColor:'transparent',borderRadius:'50%',margin:'0 auto 24px',animation:'spin 1s linear infinite'}}></div>
        <h1 style={{fontSize:24,fontWeight:'bold',color:'#fff',marginBottom:8}}>AI is generating your project...</h1>
        <p style={{color:'#c084fc'}}>This will be replaced automatically when ready</p>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )
}
