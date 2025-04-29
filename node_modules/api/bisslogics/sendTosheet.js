import {GoogleSpreadsheet} from 'google-spreadsheet'
import {JWT} from 'google-auth-library'
import dotenv from 'dotenv'

dotenv.config();

export const SendTosheet=async(userName,phoneNumber)=>{

    try{
        const serivceAccountAuth=new JWT({
            email:process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key:process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            scopes:['https://www.googleapis.com/auth/spreadsheets']
        })
    
        
        const doc=new GoogleSpreadsheet('1mB0-2QYe23il0rb1R5z_M7c-20Dru9uTAdY1K4cLtMo',serivceAccountAuth)
        
        await doc.loadInfo();
        const sheet=doc.sheetsByIndex[0]
        await sheet.addRow({name:userName,email:phoneNumber,date:new Date().toLocaleString("en-us")})
    }
    catch(error){
        const newError=new Error('Google sheet Error')
        newError.statusCode=400
        throw newError
    }
}
