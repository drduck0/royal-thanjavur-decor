import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, Download } from "lucide-react";
import { enquiry, site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { SiteDialogContent } from "@/components/layout/site-dialog-content";
import { Dialog, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type EnquiryDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  occasion?: string;
};

export function EnquiryDialog({
  open,
  onOpenChange,
  occasion = enquiry.defaultOccasion,
}: EnquiryDialogProps) {
  const [eventType, setEventType] = useState(occasion);
  const [brief, setBrief] = useState("");

  useEffect(() => {
    if (open) {
      setEventType(occasion);
      setBrief("");
    }
  }, [open, occasion]);

  function prepareBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setBrief(
      `${enquiry.briefHeading}\n\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nOccasion: ${data.get("occasion")}\nEvent date: ${data.get("date") || enquiry.fields.noDate}\nVenue: ${data.get("venue") || enquiry.fields.noDate}\n\nYour vision:\n${data.get("message") || enquiry.fallbackMessage}`,
    );
  }

  function downloadBrief() {
    const url = URL.createObjectURL(new Blob([brief], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = site.enquiryFileName;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <SiteDialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl">{enquiry.dialogTitle}</DialogTitle>
          <DialogDescription>{enquiry.dialogDescription}</DialogDescription>
        </DialogHeader>
        {brief ? (
          <>
            <div className="enquiry-preview">{brief}</div>
            <Button variant="royal" onClick={downloadBrief}>
              <Download /> {enquiry.downloadButton}
            </Button>
            <Button variant="ghost" onClick={() => setBrief("")}>
              {enquiry.editButton}
            </Button>
          </>
        ) : (
          <form className="enquiry-form" onSubmit={prepareBrief}>
            <div className="grid grid-cols-2 gap-4">
              <label className="form-field">
                {enquiry.fields.name}
                <input
                  name="name"
                  required
                  autoComplete="name"
                  placeholder={enquiry.fields.namePlaceholder}
                />
              </label>
              <label className="form-field">
                {enquiry.fields.phone}
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder={enquiry.fields.phonePlaceholder}
                />
              </label>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="form-field">
                {enquiry.fields.occasion}
                <select
                  name="occasion"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                >
                  {enquiry.occasions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="form-field">
                {enquiry.fields.date}
                <input name="date" type="date" />
              </label>
            </div>
            <label className="form-field">
              {enquiry.fields.venue}
              <input name="venue" placeholder={enquiry.fields.venuePlaceholder} />
            </label>
            <label className="form-field">
              {enquiry.fields.message}
              <textarea name="message" rows={3} placeholder={enquiry.fields.messagePlaceholder} />
            </label>
            <Button variant="royal" type="submit" className="h-11">
              {enquiry.submitButton} <ArrowRight />
            </Button>
          </form>
        )}
      </SiteDialogContent>
    </Dialog>
  );
}
