import cloud from '@lafjs/cloud'
const inviteCode = "" // 引号里面填入你的邀请码

export async function main(ctx: FunctionContext) {
  const { question } = ctx.body
  const res = await cloud.fetch.post("https://htr4n1.laf.run/ai-api",{
    question,
    inviteCode
  })
  return res.data
}


