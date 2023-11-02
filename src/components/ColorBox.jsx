import React from 'react';

const ColorBox = ({ name, colors }) => {
  return (
    <div className="flex flex-col w-[190px] h-[93px] rounded-[10px] border border-black/50 border-solid items-center justify-center">
      {colors.map((color, index) => (
        <div
          key={index}
          className="w-[50px] h-[50px] rounded-full"
          style={{
            background: `conic-gradient(from 90deg, ${color.upperhex} 50%, ${color.lowerhex} 50%)`,
            display: 'inline-block',
          }}
        ></div>
      ))}
      <p className="font-manrope text-[12px] font-[600] leading-[17.4px] tracking-[1.2px] text-black">
        {name}
      </p>
    </div>
  );
};

export default ColorBox;
