import { ShoppingCart } from "@mui/icons-material";
import Link from "next/link";

export default function ShoppingCart () {
    return (
        <link href="/cart">
            <span>
                <ShopppingCartIcon className="h-12" />
                <span className=" badge badge-warning text-white mr-5">0</span>
            </span>        
        </link>
    )
}