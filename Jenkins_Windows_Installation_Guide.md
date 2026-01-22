
# Jenkins Installation and Setup on Windows

## 1. Prerequisites

### 1.1 System Requirements
- Windows 10 / 11 (64-bit) or Windows Server 2016+
- Minimum 4 GB RAM (8 GB recommended)
- 2 CPU cores
- 10 GB free disk space

### 1.2 Java Requirement
Jenkins requires Java to run.

**Recommended Versions**
- Java 17 (LTS) – Preferred
- Java 11 (LTS)

#### Install Java
1. Download OpenJDK 17 (Windows x64 MSI).
2. Install with default options.

#### Verify Installation
```bat
java -version
```

#### Set JAVA_HOME
1. System Properties → Advanced → Environment Variables
2. Add System Variable:
   - Name: JAVA_HOME
   - Value: C:\Program Files\Eclipse Adoptium\jdk-17.x.x
3. Add to Path:
   ```
   %JAVA_HOME%\bin
   ```

Restart Command Prompt after setting variables.

---

## 2. Jenkins Installation Methods

### Option A: Windows MSI Installer (Recommended)

1. Download Jenkins Windows Installer (.msi).
2. Run installer as Administrator.
3. Select **Run Jenkins as a Windows Service**.
4. Complete installation.

- Default Port: 8080/9090
- Runs as Windows Service 

### Option B: WAR File (Manual)

1. Download `jenkins.war`.
2. Create directory:
   ```bat
   C:\Jenkins
   ```
3. Start Jenkins:
   ```bat
   java -jar jenkins.war --httpPort=8080
   ```

---

## 3. Initial Jenkins Setup

1. Open browser:
   ```
   http://localhost:8080
   ```
2. Retrieve initial admin password from:
   ```
   C:\Program Files\Jenkins\secrets\initialAdminPassword
   ```
3. Install suggested plugins.
4. Create admin user.

---

## 4. Jenkins Service Verification

### Using Services Console
- Run `services.msc`
- Ensure **Jenkins** service is running

### Using Command Line
```bat
sc query jenkins
```

---

## 5. Change Jenkins Port

### MSI Installation
Edit:
```
C:\Program Files\Jenkins\jenkins.xml
```
Update:
```xml
--httpPort=9090
```

Restart Jenkins service.

### WAR Mode
```bat
java -jar jenkins.war --httpPort=9090
```

---

## 6. Post-Installation Configuration

Navigate:
```
Manage Jenkins → Global Tool Configuration
```

Configure:
- JDK
- Git
- Maven
- NodeJS

### Jenkins Home Directory
```
C:\Program Files\Jenkins
```

Back up this directory regularly.

---

## 7. Firewall Configuration

Allow inbound TCP traffic on:
- Port 8080 (or custom port)

---

## 8. Common Issues

### Jenkins Not Starting
- Verify JAVA_HOME
```bat
echo %JAVA_HOME%
java -version
```

### Port Already in Use
```bat
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

---

## 9. Recommended Next Steps

- Configure credentials
- Create pipeline jobs
- Integrate GitHub
- Add Node.js / Playwright pipelines

---

## 10. Summary

| Item | Recommendation |
|----|----|
| Java | OpenJDK 17 |
| Install Method | MSI Installer |
| Default Port | 8080 |
| Run Mode | Windows Service |
