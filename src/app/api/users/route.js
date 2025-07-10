import { NextResponse } from "next/server";
export function GET(request)
{

    const users=[{
            name:'durgesh ',
            phone:'2525',
            course:'Python'
    },
    {
            name:'Ajay',
            phone:'5404',
            course:'java'
    },
    {
            name:'Karan',
            phone:'9090',
            course:'C++'
    },
];
return NextResponse.json(users)
}

export function POST()
{
    
}

export function DELETE(request)
{
    console.log("delete api called");
    return NextResponse.json({
        message:"deleted !!",
        status:true,
    });
}

export function PUT()
{
    
}