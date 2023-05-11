import cloud from '@lafjs/cloud'
const inviteCode = "" // 引号里面填入你的邀请码

export async function main(ctx: FunctionContext) {
  console.log(ctx.body)
  const { question, parentMessageId } = ctx.body
  if (parentMessageId){
    const res = await cloud.fetch.post("https://htr4n1.laf.run/ap-api-context", {
      question,
      inviteCode,
      parentMessageId
    })
    return res.data
  }else{
    const res = await cloud.fetch.post("https://htr4n1.laf.run/ap-api-context", {
      question,
      inviteCode
    })
    return res.data
  }
}