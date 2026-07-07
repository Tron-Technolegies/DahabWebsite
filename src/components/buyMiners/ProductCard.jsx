import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { handleProductEnquiry } from "../../utils/whatsapp";
import { Link } from "react-router-dom";

export default function ProductCard({
  bgwhite,
  img,
  name,
  price,
  slug,
  isOutOfStock,
}) {
  return (
    <Link
      to={`/buy-bitcoin-miners-uae/${slug}`}
      className={`pt-2 border border-[#0F3958] flex flex-col gap-5 justify-between items-center rounded-lg text-white hover:border-[#26ddff] duration-300 ease-in-out bigglow-effect`}
    >
      {/* Top: Image + Name + Price */}
      <div className="flex flex-col items-center gap-5 flex-grow px-3">
        <div className="relative w-[200px] h-[200px] overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-contain"
            src={img}
            alt={"Buy Bitcoin Miners UAE"}
          />
          {isOutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-[1px]">
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-rose-500/20 to-red-500/20" />
                <span className="relative text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  Out of Stock
                </span>
              </div>
            </div>
          )}
        </div>
        <h3 className="text-xl text-center font-medium">{name}</h3>
        <p className="text-xl font-semibold text-[#F79009]">{`AED ${price}`}</p>
      </div>

      {/* Bottom: Buy Now button */}
      <Link
        // onClick={() => handleProductEnquiry({ name })}
        to={`/buy-bitcoin-miners-uae/${slug}`}
        className="text-base w-full font-semibold flex gap-3 cursor-pointer justify-center py-3 border-t border-[#0F3958] items-center hover:bg-[#1ECBAF] rounded-lg nav-link mb-0"
      >
        <button>Buy Now</button>
        <IoMdAddCircleOutline />
      </Link>
    </Link>
  );
}
