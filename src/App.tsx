import './App.css';

interface ProfileProps {
  text: string,
  border: string,
  color: string,
  height: string,
  width: string
}

function Profile({ text, border, color, height, width }: ProfileProps) {
  return (
    <div
      style={{
        border: `3px solid ${border}`, 
        backgroundColor: color,
        height: `${height}px`,
        width: `${width}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black', 
        fontWeight: 'bold', 
      }}
    >
      {text}
    </div>
  );
}

function App() {
  return (
    <section style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
    }}>
      <h1 style={{ color: 'black', textAlign: 'center' }}>ALDYNE RONQUILLO</h1>
      <Profile 
        text="CPEITEL" 
        border="black" 
        color="pink" 
        height={'200'} 
        width={'200'} 
      />
    </section>
  );
}

export default App;
