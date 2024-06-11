import nodemailer from "nodemailer";
import otp from "./OTP.js"

// modules
import userSchema from "../modules/user.modules.js"
import validationCodeSchema from "../modules/validationCode.js"

const sendCode = async (userId) => {

  const foundUser = await userSchema.findOne({ _id: userId })

  const name = foundUser.name
  const email = foundUser.email
  const OTP = await otp(4, false, false);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.emailSender,
      pass: process.env.emailPass,
    },
  });

  let htm = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
 <head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>New Template</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <style type="text/css">
.rollover:hover .rollover-first {
  max-height:0px!important;
  display:none!important;
  }
  .rollover:hover .rollover-second {
  max-height:none!important;
  display:block!important;
  }
  .rollover span {
  font-size:0px;
  }
  u + .body img ~ div div {
  display:none;
  }
  #outlook a {
  padding:0;
  }
  span.MsoHyperlink,
span.MsoHyperlinkFollowed {
  color:inherit;
  mso-style-priority:99;
  }
  a.es-button {
  mso-style-priority:100!important;
  text-decoration:none!important;
  }
  a[x-apple-data-detectors] {
  color:inherit!important;
  text-decoration:none!important;
  font-size:inherit!important;
  font-family:inherit!important;
  font-weight:inherit!important;
  line-height:inherit!important;
  }
  .es-desk-hidden {
  display:none;
  float:left;
  overflow:hidden;
  width:0;
  max-height:0;
  line-height:0;
  mso-hide:all;
  }
  .es-button-border:hover {
  border-color:#3d5ca3 #3d5ca3 #3d5ca3 #3d5ca3!important;
  background:#ffffff!important;
  }
  .es-button-border:hover a.es-button,
.es-button-border:hover button.es-button {
  background:#ffffff!important;
  color:#3D5CA3!important;
  }
  .es-button-border:hover a.es-button {
  background:#ffffff!important;
  border-color:#ffffff!important;
  }
@media only screen and (max-width:600px) {*[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h1 { font-size:20px!important; text-align:center; line-height:120%!important } h2 { font-size:16px!important; text-align:left; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:20px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:16px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body a { font-size:10px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:14px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } p, ul li, ol li, a { font-size:16px!important } h2 a { text-align:left } a.es-button { border-left-width:0px!important; border-right-width:0px!important } .es-text-1529 .es-text-mobile-size-22, .es-text-1529 .es-text-mobile-size-22 * { font-size:22px!important; line-height:150%!important } .es-text-1529 .es-text-mobile-size-26, .es-text-1529 .es-text-mobile-size-26 * { font-size:26px!important; line-height:150%!important } .es-text-1529 .es-text-mobile-size-48, .es-text-1529 .es-text-mobile-size-48 * { font-size:48px!important; line-height:150%!important } .es-text-8249, .es-text-8249 p, .es-text-8249 a, .es-text-8249 h1, .es-text-8249 h2, .es-text-8249 h3, .es-text-8249 h4, .es-text-8249 h5, .es-text-8249 h6, .es-text-8249 ul, .es-text-8249 ol, .es-text-8249 li, .es-text-8249 span, .es-text-8249 sup, .es-text-8249 sub, .es-text-8249 u, .es-text-8249 b, .es-text-8249 strong, .es-text-8249 em, .es-text-8249 i { font-size:13px!important } .es-text-5128, .es-text-5128 p, .es-text-5128 a, .es-text-5128 h1, .es-text-5128 h2, .es-text-5128 h3, .es-text-5128 h4, .es-text-5128 h5, .es-text-5128 h6, .es-text-5128 ul, .es-text-5128 ol, .es-text-5128 li, .es-text-5128 span, .es-text-5128 sup, .es-text-5128 sub, .es-text-5128 u, .es-text-5128 b, .es-text-5128 strong, .es-text-5128 em, .es-text-5128 i { font-size:24px!important } }
@media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
</style>
 </head>
 <body class="body" style="width:100%;height:100%;padding:0;Margin:0">
  <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FAFAFA"><!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#fafafa"></v:fill>
			</v:background>
		<![endif]-->
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA">
     <tr style="border-collapse:collapse">
      <td valign="top" style="padding:0;Margin:0">
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr style="border-collapse:collapse">
          <td align="center" bgcolor="transparent" style="padding:0;Margin:0">
           <table class="es-content-body" cellpadding="0" cellspacing="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr style="border-collapse:collapse">
              <td align="left" bgcolor="#4566E9" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;background-color:#4566E9">
               <table cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr style="border-collapse:collapse">
                  <td align="left" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" bgcolor="#3d85c6" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#3d85c6">
                     <tr style="border-collapse:collapse">
                      <td align="left" bgcolor="#4566e9" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;letter-spacing:0;color:#4566E9;font-size:16px">&nbsp; &nbsp; &nbsp;&nbsp;</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr style="border-collapse:collapse">
          <td style="padding:0;Margin:0;background-color:#FAFAFA" bgcolor="#fafafa" align="center">
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none">
             <tr style="border-collapse:collapse">
              <td style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-top:40px;background-color:#efefef;background-position:left top" bgcolor="#efefef" align="left">
               <table cellspacing="0" cellpadding="0" align="right" class="es-right" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr style="border-collapse:collapse">
                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:left top" width="100%" cellspacing="0" cellpadding="0" role="presentation">
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0;padding-top:20px;padding-bottom:35px;font-size:0"><img src="https://fhnmisa.stripocdn.email/content/guids/CABINET_e9072850ded72a499e2fc671982849ec6f93914386fa619cb6515299bc3c50c0/images/untitled1.png" alt="" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none" class="adapt-img" width="169"></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td align="left" class="es-text-5128" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><h1 align="center" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:24px;font-style:normal;font-weight:normal;line-height:36px;color:#4566e9"><strong>Activate Acc​​ount</strong></h1></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td align="left" style="padding:0;Margin:0;padding-right:40px;padding-left:40px"><h5 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:normal;line-height:24px;color:#333333;text-align:center" align="center"><strong>HI, ${name}</strong></h5></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td align="left" style="padding:0;Margin:0;padding-left:40px;padding-right:35px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;letter-spacing:0;color:#666666;font-size:16px;text-align:center" align="center"><strong>This is your account activation code</strong></p></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td class="es-text-1529" align="center" style="Margin:0;padding-right:40px;padding-left:40px;padding-top:25px;padding-bottom:25px"><h1 align="center" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:normal;line-height:62px !important;color:#4566e9"><strong><span style="font-size:48px;line-height:62px !important">${OTP}</span><span style="font-size:22px;line-height:29px !important">​</span><span class="es-text-mobile-size-22">​</span></strong></h1></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table class="es-footer" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr style="border-collapse:collapse">
          <td style="padding:0;Margin:0;background-color:#fafafa" bgcolor="#fafafa" align="center">
           <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
             <tr style="border-collapse:collapse">
              <td style="Margin:0;padding-right:20px;padding-left:20px;padding-top:5px;padding-bottom:10px;background-color:#4566E9;background-position:left top" bgcolor="#4566E9" align="left">
               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr style="border-collapse:collapse">
                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td class="es-text-8249" align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:5px"><h2 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:13px;font-style:normal;font-weight:normal;line-height:20px;color:#ffffff" align="center"><strong>All rights reserved to rabbit short link</strong></h2></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table>
  </div>
 </body>
</html>
  `
  async function main() {
    const info = await transporter.sendMail({
      from: 'rabbit short link',
      to: email,
      subject: "Active Account",
      text: `Hello ${email}`,
      html: htm,
    });
  }

  const response = await fetch("https://api.ipify.org?format=json");

  const data = await response.json();
  const foundCode = await validationCodeSchema.findOne({ user_id: userId })
  if (foundCode) await validationCodeSchema.findOneAndDelete({ user_id: userId })

  const saveCode = await validationCodeSchema.create({ ip: data.ip, verificationCode: OTP, user_id: userId })

  setTimeout(async () => {
    const foundCode = await validationCodeSchema.findOne({ user_id: userId })
    if (foundCode) await validationCodeSchema.findOneAndDelete({ user_id: userId })
  }, 1000 * 60 * 5);

  main().catch(console.error);
  return 0
}

export default sendCode