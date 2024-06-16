/* eslint-disable @next/next/no-img-element */
'use client';

export function Card(props) {
  var borderColor;
  var firstLetterUppercase = props.pokeName[0].toUpperCase()
  var nameWithoutFirstLetter = props.pokeName.substring(1, props.pokeName.length)
  var pokeName = firstLetterUppercase + nameWithoutFirstLetter
  switch (props.type[0]) {
    case 'normal':
      borderColor = 'border-[#D3D3D3]'
      break;
    case 'fire':
      borderColor = 'border-[#FF4500]'
      break;
    case 'water':
      borderColor = 'border-[#4682B4]'
      break;
    case 'grass':
      borderColor = 'border-[#7CFC00]'
      break;
    case 'flying':
      borderColor = 'border-[#87CEEB]'
      break;
    case 'fighting':
      borderColor = 'border-[#8B0000]'
      break;
    case 'poison':
      borderColor = 'border-[#9400D3]'
      break;
    case 'electric':
      borderColor = 'border-[#FFFF00]'
      break;
    case 'ground':
      borderColor = 'border-[#8B4513]'
      break;
    case 'rock':
      borderColor = 'border-[#A9A9A9]'
      break;
    case 'psychic':
      borderColor = 'border-[#FF69B4]'
      break;
    case 'ice':
      borderColor = 'border-[#ADD8E6]'
      break;
    case 'bug':
      borderColor = 'border-[#8FBC8F]'
      break;
    case 'ghost':
      borderColor = 'border-[#4B0082]'
      break;
    case 'steel':
      borderColor = 'border-[#C0C0C0]'
      break;
    case 'dragon':
      borderColor = 'border-[#8A2BE2]'
      break;
    case 'dark':
      borderColor = 'border-[#2F4F4F]'
      break;
    case 'fairy':
      borderColor = 'border-[#FFB6C1]'
      break;

  }
  return (
    <div className={`w-48 h-72 flex flex-col justify-between items-center bg-[#212121] rounded-md border-[2px] px-2 pt-2 pb-4     ${borderColor}`}>
      <div className='w-full flex justify-between items-start'>
        <h1 className='font-bold text-[14px]'>#{props.number}</h1>
        <div className='flex gap-1'>
          {
            props.type.map((type) => {
              return (
                <>
                  <img src={'/img/types/' + type + '.png'} className='w-5' alt='pokemon type' />
                </>
              )
            })
          }
        </div>
      </div>
      <div className='w-32 h-32 flex justify-center items-end bg-gradient-to-b from-[#5C5B5B] to-[#212121] rounded-full blur-[0.4px]'>
        <img src={props.image} className='w-full mb-[-12px]' alt='pokemon' />
      </div>
      <h1 className='font-bold text-[14px]'>{pokeName}</h1>
      <div className='flex items-center gap-4'>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-[12px] text-zinc-600'>Weight</h1>
          <h1 className='font-bold text-[12px]'>{props.weight / 10 + 'kg'}</h1>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-[12px] text-zinc-600'>Height</h1>
          <h1 className='font-bold text-[12px]'>{props.height / 10 + 'm'}</h1>
        </div>
      </div>
      <h1 className='font-bold text-[12px] text-zinc-600'>
        Type:&nbsp;
        <span className='text-white'>{props.type.map((type, index) => index == 0 ? type : `/${type}`)}</span>
      </h1>
    </div>

  )
}