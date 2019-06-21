import { nouns, adjectives } from "../src/words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import "./env";
import jwt from "jsonwebtoken";

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

export const sendMail = email => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "han_gang@naver.com",
    to: address,
    subject: "포상록 접속을 위한 비밀번호 안내",
    html: `
      <h3>안녕하세요</h3>
      <h3>
        포상록 기재를 위한 로그인을 위해서는 다음 무작위로 선정된 단어를 붙여
        넣어주시기 바랍니다
      </h3>
      <table>
        <tr>
          <th style="font-size: 20px">비밀번호</th>
          <th></th>
        </tr>
        <tr>
          <th style="font-size: 20px">${secret}</th>
          <th></th>
        </tr>
      </table>
    `
  };
  return sendMail(email);
};

export const generateToken = id => jwt.sign({ id }, process.env.JWT_SECRET);
