import { MdErrorOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function Danger() {
  const navigate = useNavigate();
  return (
    <section className="leading-8">
      <div
        className="flex items-center gap-2 mt-8 mb-4 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <IoIosArrowForward />
        <Link>بازگشت</Link>
      </div>
      <h2 className="mb-8 text-2xl font-medium">روش‌های رایج کلاهبرداری</h2>
      <ul className="space-y-4">
        <li>- دریافت بیعانه</li>
        <li>- دریافت پول به بهانهٔ هزینهٔ ارسال</li>
        <li>- تحویل کالای تقلبی یا معیوب</li>
        <li>- درخواست اطلاعات بانکی یا هویتی</li>
        <li>- درخواست «کد تأییدِ ۶ رقمی ورود به حساب دیوار»</li>
      </ul>

      <h2 className="my-8 text-2xl font-medium">
        در این موارد به شدت احتیاط کنید
      </h2>
      <ul className="pb-8 space-y-4 border-b">
        <li className="flex items-center gap-2">
          <span>
            <MdErrorOutline className="size-6 text-RED" />
          </span>
          <span>آگهی‌گذار درخواست بیعانه دارد</span>
        </li>
        <li className="flex items-center gap-2">
          <span>
            <MdErrorOutline className="size-6 text-RED" />
          </span>
          <span>قیمت کالا پایین و وسوسه‌کننده‌ است</span>
        </li>
        <li className="flex items-center gap-2">
          <span>
            <MdErrorOutline className="size-6 text-RED" />
          </span>
          <span>آگهی‌گذار معاملهٔ حضوری را رد می‌کند</span>
        </li>
        <li className="flex items-center gap-2">
          <span>
            <MdErrorOutline className="size-6 text-RED" />
          </span>
          <span>
            آگهی‌گذار به جای چت دیوار، مکالمه در خارج دیوار را پیشنهاد می‌کند
          </span>
        </li>
      </ul>
      <h2 className="pb-8 my-6 text-xl font-medium">
        مشکلی برایتان پیش آمده است؟
      </h2>
      <p className="mb-4 ">
        در صورت بروز مشکل و یا شناسایی نشانه‌های مشکوک، لطفاً آگهی را در صفحهٔ
        «گزارش کلاهبرداری و رفتار مشکوک» گزارش دهید.
      </p>

      <div className="my-10 text-sm text-gray-500">
        آخرین بروزرسانی: شهریور ۱۴۰۲
      </div>
    </section>
  );
}

export default Danger;
