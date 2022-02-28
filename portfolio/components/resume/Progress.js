import React from 'react'

function Progress(props) {
  const {bgColor, number} = props;

  const container = {
    height: 25,
    width: '100%',
    backgroundColor: '#282c34',
    borderRadius: 50,
    margin: 10
  }

  const wrapper = {
    height: '100%',
    width: `${number}%`,
    backgroundColor: bgColor,
    borderRadius: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const span = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    color: '#21232a'
  }

  return (
    <div style={container}>
        <div style={wrapper}>
            <span style={span}>{`${number}%`}</span>
        </div>
    </div>
  )
}

export default Progress