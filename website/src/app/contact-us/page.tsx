"use client";

import { FormEvent, useState } from "react";
import Breadcrumb from "@/component/Breadcrumb";
import { post } from "@/config/api";

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData(event.currentTarget);
      const response = await post<string>("/api/v1/contact", formData);

      if (response.status != 201) {
        throw new Error(`${response.data}`);
      }
      setMessage(response.data);
      // TODO: form clear required
    } catch (error) {
      const typedError: any = error;
      setError(typedError.message || "İşlem esnasında bir hata oluştu.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Breadcrumb
        title="İletişim"
        desription="Bizimle iletişime geçebilirsiniz"
        breadcrumbs={[
          { title: "Anasayfa", path: "/" },
          { title: "İletişim", path: "/contact-us", active: true },
        ]}
      />
      <div className="section wb">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h4>Biz Kimiz</h4>
              <p>
                Teknolojiyi takip eden bir grup arkadaşız. Teknolojik aletleri
                ve inceliyoruz ve sizlere şeffaf bir şekilde size iletiyoruz.
              </p>

              <h4>Nasıl yardımcı oluyoruz?</h4>
              <p>
                Sizlerin geliştirdiği teknolojileri/aletleri inceleyerek
                kullanıcılarla buluşturuyoruz. Ürünlerini son kullanıcı
                açısından detaylı bir şekilde inceliyoruz.
              </p>

              <h4>Satış Öncesi Soru</h4>
              <p>
                Ürünlerinizi önceden kullanılarla buluşturarak tüm sorulara
                cevap arıyoruz ve sizlere ön satış imkanı sağlıyoruz.
              </p>
            </div>
            <div className="col-lg-7">
              {error && (
                <div
                  className="alert alert-warning alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Bir hata oluştu!</strong>
                  <br />
                  {error}
                </div>
              )}
              {message && (
                <div
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  {message}
                </div>
              )}
              <form onSubmit={onSubmit} className="form-wrapper">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Adınız"
                  required
                  name="name"
                  disabled={isLoading}
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-posta adresi"
                  required
                  name="email"
                  disabled={isLoading}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Telefon numarası"
                  required
                  name="phone"
                  disabled={isLoading}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Konu"
                  required
                  name="subject"
                  maxLength={60}
                  disabled={isLoading}
                />
                <textarea
                  className="form-control"
                  placeholder="Mesaj"
                  required
                  name="message"
                  maxLength={140}
                  disabled={isLoading}
                ></textarea>
                <button
                  disabled={isLoading}
                  type="submit"
                  className="btn btn-primary"
                >
                  {isLoading ? "Gönderiliyor" : "Gönder"}
                  <i className={`fa fa-envelope${!isLoading && "-open"}-o`}></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
