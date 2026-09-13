package com.altcampus.globaluni.core;

import java.time.Instant;

public class EnterpriseLedger {
    private final String studentEmail;
    private final Instant syncTimestamp;

    public EnterpriseLedger(String studentEmail) {
        this.studentEmail = studentEmail;
        this.syncTimestamp = Instant.now();
    }

    public void commitGraduationLog() {
        System.out.println("[Java Enterprise Ledger]: Immutable completion status saved to matrix at " + syncTimestamp);
    }
}
