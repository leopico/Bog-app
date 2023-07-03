'use client'

const obfuscatedEmail = "leopico&#46;peceng&#64;gmail&#46;com";

const EmailLink: React.FC = () => {
    const decodeEmail = (obfuscatedEmail: string): string => {
        return obfuscatedEmail
            .replace(/&#46;/g, ".")
            .replace(/&#64;/g, "@");
    };

    const handleClick = () => {
        const decodedEmail = decodeEmail(obfuscatedEmail);
        window.location.href = `mailto:${decodedEmail}`;
    };

    return (
        <a
            href={`mailto:${decodeEmail(obfuscatedEmail)}`}
            className="hover:under hover:text-black hover:font-bold"
            onClick={handleClick}
            dangerouslySetInnerHTML={{ __html: decodeEmail(obfuscatedEmail) }}
        />
    );
};

export default EmailLink;
