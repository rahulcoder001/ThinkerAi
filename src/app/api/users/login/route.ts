import { connect } from "../../../../dbconfig/Dbconfig";
import User from "../../../../models/User"
import {NextRequest,NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'

connect()


export async function POST(request:NextRequest){
    try{
        const reqBody=await request.json();
        const{email,username,password}=reqBody
        console.log(reqBody);

        const user=await User.findOne({email})
        if(user){
            return NextResponse.json({error:"User already exist"},{status:400})
        }

        const salt=await bcryptjs.genSalt(10);
        const hashedPassword=await bcryptjs.hash(password,salt)

        const newUser=new User({
           email,
           username,
           password:hashedPassword
        })

        const savedUser=await newUser.save()
        console.log(savedUser)

        return NextResponse.json({
            message:"User created successfully",
            success:true,
            savedUser
           })
    }
    catch(err:any){
        return  NextResponse.json({err:err.message},{status:500})
     }
}