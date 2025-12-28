"use client";
const VirtualWalkIn = () => {
  return (
    <section className="w-full h-[70vh]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1766744011985!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRDYtX1d0cEFF!2m2!1d26.20377714035159!2d78.1605613689301!3f349.85216928407374!4f8.139445780953281!5f0.7820865974627469"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};

export default VirtualWalkIn;