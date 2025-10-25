/** @format */

export default function FindUs() {
  return (
    <section className=" mx-auto py-6 md:py-8 lg:py-12 xl:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-primary mb-1 sm:mb-2">
            Find Us
          </h2>
          <p className="text-xs sm:text-sm text-primary/70">
            Located in Holmview, Queensland. Easy access for all your transport
            needs.
          </p>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden shadow-lg border border-border h-96 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12249.644172077555!2d90.39999271018802!3d23.780173168236896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71f812bea6b%3A0xc289a221fd0c83e5!2sAQUA%20Tower!5e1!3m2!1sen!2sbd!4v1761382104528!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
