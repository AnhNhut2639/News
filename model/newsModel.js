import { model, Schema } from "mongoose";
import uuid from "uuid";

const newsSchema = Schema(
  {
    id: { type: String, default: uuid, required: true },
    tieuDe: { type: String, required: true },
    trichYeu: { type: String, required: true },
    tacGia: { type: String, required: true },
    nguon: { type: String },
    noiDung: { type: String, required: true },
    daDuyet: { type: Boolean, default: false, required: true },
    deny: { type: Boolean, default: false, required: true },
    idNguoiDuyet: { type: String },
    tenNguoiDuyet: { type: String },
    ngayDuyet: { type: Date },
    idNguoiDang: { type: String, required: true },
    tenNguoiDang: { type: String, required: true },
    ngayDang: { type: Date, default: Date.now, required: true },
    idNguoiCapNhat: { type: String },
    tenNguoiCapNhat: { type: String },
    ngayCapNhat: { type: Date },
    luotXem: { type: Number, default: 0 },
    danhGia: { type: Number },
    binhLuan: { type: String },
    hashtag: { type: String },
    idChuDe: { type: String, required: true },
    chuDe: { type: String, required: true },
    tinNoiBat: { type: Boolean }
  },
  { versionKey: false }
);

const News = model("News", newsSchema);

module.exports = News;
