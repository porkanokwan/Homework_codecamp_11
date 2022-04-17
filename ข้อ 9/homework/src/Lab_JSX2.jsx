import React from "react";

function Variable() {
    const var1 = "JSX2";
    const var2 = 20;
    const var3 = true;
    const var4 = null;
    const var5 = undefined;
    const var6 = ['John'];
    const var7 = {
        name: 'David'
    };
    console.log(var3)
    console.log(var4)
    console.log(var5)
    console.log(var6)
    console.log(var7)
    return(
        <div>
            <p>{var1}</p> {/* แสดงได้ */}
            <p>{var2}</p> {/* แสดงได้ */}
            <p>{var3}</p> {/* ไม่แสดง แต่สามารถ console.log ได้ */}
            <p>{var4}</p> {/* ไม่แสดง แต่สามารถ console.log ได้ */}
            <p>{var5}</p> {/* ไม่แสดง แต่สามารถ console.log ได้ */}
            {/*<p>{var6}</p> {/* ไม่แสดง แต่สามารถ console.log ได้ */}
            {/*<p>{var7}</p> {/*Error แต่สามารถ console.log ได้ */}

            <p>{var6[0]}</p>
            <p>{var7.name}</p>
        </div>
    )
}

export default Variable;