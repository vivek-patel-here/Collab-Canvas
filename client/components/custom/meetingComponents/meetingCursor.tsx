"use client";

import { useStore } from "@/context/globalContext";
import { useMeeting } from "@/context/meetingContext";
import { MousePointer2 } from "lucide-react";
import { useEffect } from "react";

const CURSOR_COLORS = [
    // Reds / Oranges
    "#EF4444", "#DC2626", "#F97316", "#EA580C",

    // Yellows
    "#F59E0B", "#EAB308", "#FACC15",

    // Greens
    "#22C55E", "#16A34A", "#10B981", "#059669",

    // Teals / Cyans
    "#14B8A6", "#0D9488", "#06B6D4", "#0891B2", "#22D3EE",

    // Blues
    "#3B82F6", "#2563EB", "#1D4ED8", "#60A5FA",

    // Indigos / Purples
    "#6366F1", "#4F46E5", "#7C3AED", "#8B5CF6", "#A855F7",

    // Pinks
    "#EC4899", "#DB2777", "#F472B6",

    // Neutrals (still visible)
    "#334155", "#475569", "#64748B",

    // Fun / Accent
    "#84CC16", // lime
    "#FB7185", // rose
    "#38BDF8", // sky
    "#C084FC", // lavender
];


const getCursorColor = (uid: string) => {
    let hash = 0;
    for (let i = 0; i < uid.length; i++) {
        hash = uid.charCodeAt(i) + ((hash << 5) - hash);
    }
    return CURSOR_COLORS[Math.abs(hash) % CURSOR_COLORS.length];
};

function MeetingCursor() {
    const { cursors, participants, setCursors } = useMeeting();
    const { user } = useStore();

    useEffect(() => {
        setCursors((prev: any) => {
            const updated = { ...prev };
            participants.forEach((p: any) => {
                if (updated[p.uid]) {
                    updated[p.uid].canDraw = p.canDraw;
                }
            });
            return updated;
        });
    }, [participants]);

    return (
        <>
            {Object.entries(cursors).map(([uid, cursor]: [string, any]) => {
                if (uid === user.id || !cursor.canDraw) return null;

                const color = getCursorColor(uid);

                return (
                    <div
                        key={uid}
                        style={{
                            position: "fixed",
                            pointerEvents: "none",
                            top: cursor.y,
                            left: cursor.x,
                            zIndex: 100,
                            color,
                        }}
                    >
                        <MousePointer2 size={16} style={{
                            color,
                            filter: "drop-shadow(0 0 4px rgba(0,0,0,0.5))",
                        }} />
                        <span
                            style={{ color }}
                            className="absolute text-[10px] bottom-0 right-0 translate-x-full"
                        >
                            {cursor.name}
                        </span>
                    </div>
                );
            })}
        </>
    );
}

export default MeetingCursor;
